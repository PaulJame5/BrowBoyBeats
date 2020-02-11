from tornado import websocket, web, ioloop, httpserver
import tornado
import json

session = {}
WAITING_FOR_PLAYERS=0
GAME_IN_PROGRESS=1


class WSHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True
    
    #think of self as the equivalent of ‘*this’ in C++                    
    def open(self , *args):
        print("Connection Opened")
        #self.write_message(self.request.remote_ip)
        self.id = self.get_argument("Id")
        print("UUID Received from client " + self.id)
        self.player_address = str(self.request.remote_ip) + ":"  + str(self.id)
        self.game_state=WAITING_FOR_PLAYERS
        self.join()
        
    def on_message(self, message):
        self.msg = json.loads(message)
        if(self.msg['type'] == 'updateState'):
            self.send_to_other_player(message)
        if(self.msg['type'] == 'gameover'):
            self.send_to_other_player(message)
            self.write_message(json.dumps(message))

    def join(self):  
        if(len(session) < 2 ):
            session[self.player_address] = self
            # send waiting message to this connection
            message = {}
            message['type'] = str(self.game_state)
            self.write_message(json.dumps(message))
            if (len(session) == 2):
                self.game_state = GAME_IN_PROGRESS
                message['type'] = str(self.game_state)
                self.write_message(json.dumps(message))
                self.send_to_other_player(json.dumps(message))
                # send a message of this type to client...
        else:
            self.msg['type'] = 'Error'
            self.msg['data'] = 'Two players already in the game!'

            #self.send_to_other_player(self.msg)
         # game is full
    def on_close(self):
        if self.player_address in session:
            print('Deleting: ' + self.player_address)
            del session[self.player_address]

    def send_to_other_player(self, message):
        for key, value in session.items():
        #if the key is not the socket the message came in on - what does that mean?
            if(key != self.get_player_address()):
                print('Sending ' + message)
                value.write_message(message)
    def get_player_address(self):
        return str(self.request.remote_ip) + ":"  + str(self.id)
   

app= tornado.web.Application([
    #map the handler to the URI named "wstest"
    (r'/wstest', WSHandler),
])
 
if __name__ == '__main__':
    server_port=8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()

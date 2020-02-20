function Score(initial_score = 0)
{
    this.score = initial_score;
}

Score.prototype.AddPoints = function(x =0 )
{
    this.score += x;
    console.log("SCORE: " +this.score );
}

Score.prototype.RemovePoints = function(x =0 )
{
    this.score -= x;
}

Score.prototype.Reset = function()
{
    this.score = 0;
}
Score.prototype.getScore = function()
{
    return this.score;
}
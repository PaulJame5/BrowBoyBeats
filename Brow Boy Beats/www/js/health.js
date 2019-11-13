// Health class that can be used by both player and enemies


class Health
{
    constructor(health)
    {
        this.health = health;
    }

    
    RemoveHealth(t_damageAmount)
    {
        health -= t_damageAmount;
    }


    AddToHealth(t_increaseAmount)
    {
        health += t_increaseAmount;
    }
}
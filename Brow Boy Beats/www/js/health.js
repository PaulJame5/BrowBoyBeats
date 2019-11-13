// Health class that can be used by both player and enemies


class Health
{
    constructor(health, max_health)
    {
        this.health = health;
        this.max_health = max_health;
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
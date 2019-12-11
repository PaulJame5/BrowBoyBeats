function Attributes(maxHealth = 0,strength = 0,defense = 0, invincibility = false, alive = true)
{

    this.maxHealth = maxHealth;
    this.health = maxHealth;

    this.defense = defense;
    this.strength = strength;

    this.alive = alive;

    this.invincibility = invincibility;

}

Attributes.prototype.init = function()
{
    this.health = this.maxHealth;
}

Attributes.prototype.isAlive = function()
{
    return this.alive;
}

Attributes.prototype.setAlive = function(t_bool = false)
{
    this.alive = t_bool;
}

Attributes.prototype.getHealth = function()
{
    return this.health;
}

Attributes.prototype.setHealth = function(health = 0)
{
    this.health = health;
}

Attributes.prototype.getStrength = function(strength = 0)
{
    this.strength = strength;
}

Attributes.prototype.getDefense = function(defense = 0)
{
    this.defense = defense;
}

Attributes.prototype.getInvincible = function()
{
    return this.invincibility;
}

Attributes.prototype.setInvincible = function(t_bool = false)
{
    this.invincibility = t_bool;
}






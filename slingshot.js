class Slingshot{
constructor(bodyA,pointB) {
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.2,
lenghth:10,

}
this.sling = Constraint.create(
    options
)
this.pointB=pointB
World.add(world,this.sling);

}
display(){
    line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,
        this.sling.pointB.x,this.sling.pointB.y)
}







}






    

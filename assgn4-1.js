function RectangleArea(a,b)  //to find the area of rectangle
    {
        this.a=a;
        this.b=b;
        this.area=function(){return this.a*this.b;};
        
        
    }

var C =new RectangleArea(2,3);
C.area();
function RectanglePerimeter(a,b)  //to find perimeter of rectangle
{
    this.a=a;
    this.b=b;
    this.perimeter=function(){return 2*(this.a+this.b);};

}
var D=new RectanglePerimeter(2,5);
D.perimeter();

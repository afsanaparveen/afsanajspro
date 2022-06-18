function Point(x1,y1,x2,y2)     //to find the distance between two points
    {
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.distance=function(){return Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2));};
        
    }
var Dis=new Point(3,4,4,3);
Dis.distance();
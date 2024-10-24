function greet (name){
    let x =100;
    console.log(`Good Morning ${name}`);
    console.log(this.x);


}

greet("sanket");

const greet1 =(name)=>{
    console.log(`Good Morning ${name}`);

};

add = a =>a;

const a1 = new greet("harish");
a1;
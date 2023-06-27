const express=require('express');
require('./db/config');
const User=require('./db/User')
const Product =require('./db/product');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
       res.send("App is working");
});

app.post('/register',async (req,res)=>{
       console.log("request recieved");
       let user=new User(req.body);
       let result=await user.save();
       result = result.toObject();
       delete result.password;
       res.send(result);

});


app.post('/login',async (req,res)=>{
       console.log("Login request recevied");

     

       if(req.body.email&&req.body.password)
       {
                     let user=await User.findOne(req.body).select("-password");
              if(user)
              {

                     res.send(user);
              }
              else
              {

                     res.send({result: "No User Found"});
              }
       }
       else
       {

              res.send({result: "Filed Should not be empty"});
       }
});

app.post("/add-product", async(req,res)=>{
       let product = new Product(req.body);
       let result = await product.save();
       res.send(result);
       
});


app.get("/products", async(req,res)=>{
       let products=await Product.find();
       if(products.length >0)
       {
              res.send(products);
       }
       else
       {
              res.send({result:"No Products Found"});
       }
})




app.listen(3000);

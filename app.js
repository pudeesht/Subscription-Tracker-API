import express from 'express';
import { PORT} from './config/env.js';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subRouter from "./routes/subscription.routes.js";
import connectionToDatabse from './database/mongodb.js';

const app = express();


app.use("/api/v1/auth",authRouter);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/subscription",subRouter);


app.get('/',(req,res)=>{
    res.send("Welcome my nigga");
})


app.listen(PORT,async()=>{
    console.log(`API runninh on port number -: http://localhost:${PORT}`);
    
    await connectionToDatabse();

})



export default app;

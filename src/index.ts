import express from "express"; 
import path from "path";

import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";
import notFoundPage from "./routes/404"; 

import {requestHandler} from "./routes"; 

const app = express(); 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(notFoundPage); 

app.listen(3000);

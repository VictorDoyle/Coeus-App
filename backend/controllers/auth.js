import express from "express";
import * as bcrypt from "bcryptjs";
import cors from "cors";
import prisma from "@prisma/client"

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

const register = async (request, response) => {
    try {
      const foundUser = await db.user.findUnique({
        where: {
            email: request.body.email
        }})
      
      if (foundUser) {
        response.json({message: "the User has alreadye exists", user: foundUser })
      }
  
      const salt = await bcrypt.genSalt(10);
      // takes each character and turns it into multiple random characters
      const hash = await bcrypt.hash(request.body.password, salt);
      request.body.password = hash;
      // create user with req.body and hashed password
      const createdUser = await db.User.create({ ...request.body, password: hash });
  
      return response
        .status(201)
        .json({ status: 201, message: "success", createdUser });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
      });
    }
  };
  
  // POST Login Route
  const login = async (request, res) => {
    try {
      const foundUser = await db.User.findUnique({ email: request.body.email });
  
      console.log(foundUser);
  
      if (!foundUser) {
        return response.json({message: "Email or Password incorrect"});
      }
  
      const match = await bcrypt.compare(request.body.password, foundUser.password);
  
      if (!match) {
        return response.json({message: "Email or Password incorrect"});
      }
  
      const isMatch = await bcrypt.compare(request.body.password, foundUser.password);
  
      if (isMatch) {
        //TODO create a json web token
        const signedJwt = await jwt.sign(
          {
            _id: foundUser._id,
          },
          "secret key",
          {
            expiresIn: "1d",
          }
        );
  
        return response.status(200).json({
          status: 200,
          message: "Success",
          id: foundUser._id,
          signedJwt,
        });
       
      } else {
        return response.status(400).json({
          status: 400,
          message: "Incorrect login!",
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
      });
    }
  };
  
  // POST Logout Route
  const logout = (request, response) => {
    // TODO: Remove the JWT via react.
  };
  
export { register, login, logout};
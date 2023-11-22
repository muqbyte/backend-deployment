import { DataTypes } from "sequelize";
import { postgresConnection } from "../database/connection.js";

const User = postgresConnection.define('User', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    profilepictureurl:{
      type: DataTypes.STRING,
      allowNull: true,
  
  }
  }, {
    timestamps:true
  });

  export default User;
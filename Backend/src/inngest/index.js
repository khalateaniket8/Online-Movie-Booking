const { Inngest } = require("inngest");
const userModel = require("../models/userModel");

// Create a client to send and receive events
const inngest = new Inngest({ id: "my-app" });

//innegest function to save user data to a database
const syncUserCreation = inngest.createFunction(
    {id: "sync-user-from-clerk"},
    {event: "clerk/user.created"},

    async({event}) => {
      const{id, first_name, last_name, email_addresses, image_url} = event.data
      const userData = {
        _id: id,
        name: first_name + ' ' + last_name,
        email: email_addresses[0].email_address,
        image: image_url
      }
      await userModel.create(userData)
    }
)

//inngest function to delete user data to a database
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async({event}) => {
        const {id} = event.data
        await userModel.findByIdAndDelete(id)
    }
)

//Inngest Function to update user data to a database
const syncUserUpdation = inngest.createFunction(
  {id: 'sync-user-from-clerk'},
  {event: 'clerk/user.updated'},
  async({event}) => {
     const {id, first_name, last_name, email_addresses, image_url} = event.data
     const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + ' ' + last_name,
      image: image_url
     }
     await userModel.findByIdAndUpdate(id, userData)
  }
)

// Create an empty array for Inngest functions
const functions = [];

module.exports = { inngest, functions, syncUserCreation, syncUserDeletion, syncUserUpdation};

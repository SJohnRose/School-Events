//Create handlers for the routes
import EventMessage from '../models/eventMessage.js';

export const getEvents = async (req, res) => {
    try {
        const eventMessages =  await EventMessage.find();  
        console.log(eventMessages);
        res.status(200).json(eventMessages);
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
    //res.send('Test Route!');
};

export const createEvent = (req, res) => {
    res.send('Post Creation');
};
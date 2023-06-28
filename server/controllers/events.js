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

export const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = new EventMessage(event);
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    }
    catch(error) {
        res.status(409).json({message: error.message});
    }
    //res.send('Post Creation');
};
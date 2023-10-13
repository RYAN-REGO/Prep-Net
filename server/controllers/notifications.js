import notification from "../models/notification.js";

export const getNotice = async(req, res) => {
    try{
        const notifications = await notification.find();
        res.status(200).json(notifications);
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
}

export const addNotice = async(req, res) => {
    const noti = req.body;
    const newNoti = new notification(noti);

    try{
        await newNoti.save();
        res.status(200).json(newNoti);
    }
    catch(error){
        
        res.status(404).json({message : error.message});
    }
}
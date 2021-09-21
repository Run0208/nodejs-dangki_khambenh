import express from "express";
import homeController from "../controllers/homeController";
import userContrller from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.dislayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    

    router.post('/api/login', userContrller.handleLogin);
    router.get('/api/get-all-users', userContrller.handleGetAllUsers);
    router.post('/api/create-new-user', userContrller.handleCreateNewUser);
    router.put('/api/edit-user', userContrller.handleEditUser);
    router.delete('/api/delete-user', userContrller.handleDeleteUser);
    router.get('/api/allcode', userContrller.getAllCode);
    
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-infor-doctor', doctorController.postInforDoctor);
    router.get('/api/get/detail-doctor-by-id', doctorController.getDetailDoctor);
    router.post('/api/create-schedule', doctorController.bulkCreateSchedule);
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate);
    router.get('/api/get-extra_infor-doctor-by-id', doctorController.getExtraInforDoctor);
    router.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctor);



    return app.use("/", router);
}
module.exports = initWebRoutes;
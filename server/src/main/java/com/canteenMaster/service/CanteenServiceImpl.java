//package com.canteenMaster.service;
//
//import com.canteenMaster.model.Canteen;
//import com.canteenMaster.model.User;
//import com.canteenMaster.repository.CanteenRepository;
//import com.canteenMaster.request.CreateCanteenRequest;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CanteenServiceImpl implements CanteenService{
//
//    @Autowired
//    private CanteenRepository canteenRepository;
//
//    @Autowired
//    private UserService userService;
//
//
//    @Override
//    public Canteen createCanteen(CreateCanteenRequest req, User user) {
//
//        Canteen canteen = new Canteen();
//        canteen.setContactInformation(req.getContactInformation());
//        canteen.setCuisineType(req.getCuisineType());
//        canteen.setImages(req.getImages());
//        canteen.setName(req.getName());
//        canteen.setOpeningHours(req.getOpeningHours());
//        canteen.setRegistrationDate(LocalDateTime.now());
//        canteen.setOwner(user);
//
//        return canteenRepository.save(canteen);
//    }
//
//    @Override
//    public Canteen updateCanteen(Long canteenId, CreateCanteenRequest updatedCanteen) throws Exception {
//        Canteen canteen = findCanteenById(canteenId);
//
//        if(canteen.getCuisineType()!=null){
//            canteen.setCuisineType(updatedCanteen.getCuisineType());
//        }
//
//        if(canteen.getName()!=null){
//            canteen.setName(updatedCanteen.getName());
//        }
//
//        return canteenRepository.save(canteen);
//    }
//
//    @Override
//    public void deleteCanteen(Long canteenId) throws Exception {
//
//        Canteen canteen = findCanteenById(canteenId);
//
//        canteenRepository.delete(canteen);
//    }
//
//    @Override
//    public List<Canteen> getAllCanteen() {
//        return canteenRepository.findAll();
//    }
//
//    @Override
//    public Canteen findCanteenById(Long id) throws Exception {
//        Optional<Canteen> opt = canteenRepository.findById(id);
//
//        if(opt.isEmpty()){
//            throw new Exception("canteen not with id : " + id);
//        }
//        return opt.get();
//    }
//
//    @Override
//    public Canteen getCanteenByUserId(Long userId) throws Exception {
//
//        Canteen canteen = canteenRepository.findByOwnerid(userId);
//
//        if(canteen == null){
//            throw new Exception("canteen not found with ownerId : " + userId);
//        }
//        return canteen;
//    }
//
//    @Override
//    public Canteen updateCanteenStatus(Long id) throws Exception {
//        Canteen canteen = findCanteenById(id);
//        canteen.setOpen(!canteen.isOpen());
//
//        return canteenRepository.save(canteen);
//    }
//}

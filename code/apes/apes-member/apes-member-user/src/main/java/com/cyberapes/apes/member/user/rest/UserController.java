package com.cyberapes.apes.member.user.rest;

import com.cyberapes.apes.core.controller.CoreController;
import com.cyberapes.apes.member.user.model.UserVO;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member/user/user")
public class UserController extends CoreController {

    @PostMapping("/selectUser")
    public UserVO selectUser(long userId){
        return null;
    }

}
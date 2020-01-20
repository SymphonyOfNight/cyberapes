package com.cyberapes.apes.member.user.rest;

import com.cyberapes.apes.core.annotation.Permission;
import com.cyberapes.apes.core.controller.CoreController;
import com.cyberapes.apes.core.model.ResultVO;
import com.cyberapes.apes.member.user.model.UserVO;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member/user/user")
@Permission(module = "会员_用户_用户信息", value="member_user_user")
public class UserController extends CoreController {
    /**
     * 查询用户信息
     * @param userId
     * @return
     */
    @PostMapping("/selectById")
    @Permission(module = "查询用户信息", value = "selectById")
    public UserVO updateUserInfo(long userId){
        return null;
    }

    /**
     * 更新用户信息
     * @param userVO
     * @return
     */
    @PostMapping("/updateUserInfo")
    @Permission(module = "更新用户信息", value = "updateUserInfo")
    public ResultVO updateUserInfo(UserVO userVO){
        return null;
    }
}
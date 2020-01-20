package com.cyberapes.apes.member.user.rest;

import com.cyberapes.apes.core.model.ResultVO;
import com.cyberapes.apes.member.user.model.UserVO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 用户门户
 */
@RestController
@RequestMapping("/member/user/portal")
public class PortalController {

    /**
     * 注册
     * @param userVO
     * @return
     */
    @PostMapping("/registe")
    public ResultVO registe(UserVO userVO){
        ResultVO resultVO = new ResultVO();
        userVO.getUserName();
        if(1==1){
            resultVO.setFlag(1);
            resultVO.setMessage("注册成功");
        }else{
            resultVO.setFlag(-1);
            resultVO.setMessage("注册失败");
        }
        return resultVO;
    }

    /**
     * 登入
     * @param userVO
     * @return
     */
    @PostMapping("/login")
    public ResultVO login (UserVO userVO){
        return null;
    }

    /**
     * 登出
     * @param userVO
     * @return
     */
    @PostMapping("/logout")
    public ResultVO logout (UserVO userVO){
        return null;
    }

    /**
     * 重置密码
     * @param userVO
     * @return
     */
    @PostMapping("/resetPwd")
    public ResultVO resetPwd (UserVO userVO){
        return null;
    }

}
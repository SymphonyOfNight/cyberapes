package com.cyberapes.apes.core.mapper;

import com.cyberapes.apes.core.entity.CoreVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ICoreMapper {

    CoreVO findUserById(String userId);

}
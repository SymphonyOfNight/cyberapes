package com.cyberapes.apes.core.service;


import com.cyberapes.apes.core.mapper.ICoreMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class CoreService implements ICoreService{

    /**
     * 注入Mapper
     */
    @Autowired
    private ICoreMapper coreMapper;


    @Override
    public List selectAll() {
        return coreMapper.selectAll();
    }

    @Override
    public Object selectByPrimaryKey(Object key) {
        return coreMapper.selectByPrimaryKey(key);
    }

    @Override
    public List selectBy(Object record) {
        return coreMapper.selectBy(record);
    }

    @Override
    public int selectCountBy(Object record) {
        return coreMapper.selectCountBy(record);
    }

    @Override
    public int insert(Object record) {
        return coreMapper.insert(record);
    }

    @Override
    public int batchInsert(List lst) {
        return coreMapper.batchInsert(lst);
    }

    @Override
    public int updateByPrimary(Object record) {
        return coreMapper.updateByPrimary(record);
    }

    @Override
    public int updateSelectiveByPrimaryKey(Object record) {
        return coreMapper.updateSelectiveByPrimaryKey(record);
    }

    @Override
    public int deleteByPrimaryKey(Object record) {
        return coreMapper.deleteByPrimaryKey(record);
    }

    @Override
    public int deleteBy(Object record) {
        return coreMapper.deleteBy(record);
    }
}

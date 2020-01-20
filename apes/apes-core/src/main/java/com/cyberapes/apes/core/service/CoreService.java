package com.cyberapes.apes.core.service;


import com.cyberapes.apes.core.mapper.ICoreMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 通用Service，提供CURD基本操作
 * @param <T>
 */
@Service
public abstract class CoreService<T> implements ICoreService<T>{

    /**
     * 注入Mapper
     */
    @Autowired
    private ICoreMapper coreMapper;

    /**
     * 查询全部记录
     * @return
     */
    @Override
    public List<T> selectAll() {
        return coreMapper.selectAll();
    }

    /**
     * 根据id查询单条记录
     * @param key
     * @return
     */
    @Override
    public T selectByPrimaryKey(Object key) {
        return (T)coreMapper.selectByPrimaryKey(key);
    }

    /**
     * 根据条件查询数据集
     * @param record
     * @return
     */
    @Override
    public List<T> selectBy(Object record) {
        return coreMapper.selectBy(record);
    }

    /**
     * 插入单条数据
     * @param record
     * @return
     */
    /**
     * 根据条件查询记录数量
     * @param record
     * @return
     */
    @Override
    public int selectCountBy(T record) {
        return coreMapper.selectCountBy(record);
    }

    /**
     * 插入单条数据
     * @param record
     * @return
     */
    @Override
    public int insert(T record) {
        return coreMapper.insert(record);
    }

    /**
     * 批量插入数据
     * @param lst
     * @return
     */
    @Override
    public int batchInsert(List<T> lst) {
        return coreMapper.batchInsert(lst);
    }

    /**
     * 根据主键更新全部字段
     * @param record
     * @return
     */
    @Override
    public int updateByPrimary(T record) {
        return coreMapper.updateByPrimary(record);
    }

    /**
     * 根据主键更新部分字段
     * @param record
     * @return
     */
    @Override
    public int updateSelectiveByPrimaryKey(T record) {
        return coreMapper.updateSelectiveByPrimaryKey(record);
    }

    /**
     * 根据主键删除
     * @param record
     * @return
     */
    @Override
    public int deleteByPrimaryKey(T record) {
        return coreMapper.deleteByPrimaryKey(record);
    }

    /**
     * 根据条件删除
     * @param record
     * @return
     */
    @Override
    public int deleteBy(T record) {
        return coreMapper.deleteBy(record);
    }
}

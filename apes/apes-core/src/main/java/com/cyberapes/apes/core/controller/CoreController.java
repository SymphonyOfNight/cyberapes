package com.cyberapes.apes.core.controller;

import com.cyberapes.apes.core.service.ICoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public abstract class CoreController<T> {

    @Autowired
    protected ICoreService<T> coreService;

    /**
     * 查询全部记录
     * @return
     */
    protected List<T> selectAll() {
        return coreService.selectAll();
    }

    /**
     * 根据id查询单条记录
     * @param key
     * @return
     */
    protected T selectByPrimaryKey(Object key) {
        return (T)coreService.selectByPrimaryKey(key);
    }

    /**
     * 根据条件查询数据集
     * @param record
     * @return
     */
    protected List<T> selectBy(T record) {
        return coreService.selectBy(record);
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
    protected int selectCountBy(T record) {
        return coreService.selectCountBy(record);
    }

    /**
     * 插入单条数据
     * @param record
     * @return
     */
    protected int insert(T record) {
        return coreService.insert(record);
    }

    /**
     * 批量插入数据
     * @param lst
     * @return
     */
    protected int batchInsert(List<T> lst) {
        return coreService.batchInsert(lst);
    }

    /**
     * 根据主键更新全部字段
     * @param record
     * @return
     */
    protected int updateByPrimary(T record) {
        return coreService.updateByPrimary(record);
    }

    /**
     * 根据主键更新部分字段
     * @param record
     * @return
     */
    protected int updateSelectiveByPrimaryKey(T record) {
        return coreService.updateSelectiveByPrimaryKey(record);
    }

    /**
     * 根据主键删除
     * @param record
     * @return
     */
    protected int deleteByPrimaryKey(T record) {
        return coreService.deleteByPrimaryKey(record);
    }

    /**
     * 根据条件删除
     * @param record
     * @return
     */
    protected int deleteBy(T record) { return coreService.deleteBy(record); }
}

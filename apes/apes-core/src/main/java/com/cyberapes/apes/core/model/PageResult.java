package com.cyberapes.apes.core.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

/**
 * @author wangjie5
 * @description 分页查询结果通用对象
 * @date 2019/5/30
 */
public class PageResult<T extends CoreVO> implements Serializable {

    private static final long serialVersionUID = -9087721174852643901L;
    /**
     * 总记录数
     */
    protected int total;

    /**
     * 结果集
     */
    @Getter
    @Setter
    protected List<T> list;


    public int getTotal() { return list.size(); }

    public void setTotal(int total) {
        this.total = total;
    }
}
package com.cyberapes.apes.core.model;

import lombok.Data;

import java.util.Date;

@Data
public class CoreVO extends UserVO {

	private static final long serialVersionUID = 1L;

	/**
	 * 页码
	 */
	protected int pageNo = 1;

	/**
	 * 每页数据量
	 */
	protected int pageSize = 20;
	/**
	 * 创建时间
	 */
	protected Date createTime;

	/**
	 * 创建人Id
	 */
	protected Integer creatorId;

	/**
	 * 创建人名称
	 */
	protected Integer creatorName;

	/**
	 * 最后更新时间
	 */
	protected Date lastUpdateTime;

	/**
	 * 最后更新人Id
	 */
	protected Date lastUpdateId;

	/**
	 * 最后后更新人名称
	 */
	protected Date lastUpdateName;

}
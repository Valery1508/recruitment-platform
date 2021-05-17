package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserTime;

import java.util.List;

public interface UserTimeService {

    List<UserTime> splitIntervalIntoSlots(TimeInterval timeInterval);

    List<UserTimeResponseDto> saveUserIntervals(User user, List<UserTime> userTimes);

}
package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CityDto;
import com.exadel.recruitmentPlatform.dto.mapper.CityMapper;
import com.exadel.recruitmentPlatform.entity.City;
import com.exadel.recruitmentPlatform.repository.CityRepository;
import com.exadel.recruitmentPlatform.service.CityService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;

    private final CityMapper cityMapper;

    @Override
    public Long save(String cityName) {
        City city = Optional.ofNullable(cityRepository
                .findByName(cityName))
                .map(item -> update(cityName))
                .orElseGet(() -> create(cityName));
        cityRepository.save(city);
        return city.getId();
    }

    private City create(String cityName) {
        City city = cityMapper.toEntity(new CityDto(cityName));
        City saved = cityRepository.save(city);
        return saved;
    }

    private City update(String cityName) {
        City city = cityRepository.findByName(cityName);
        cityMapper.update(cityName, city);
        City saved = cityRepository.save(city);
        return saved;
    }

    @Override
    public Long getCityByName(String name) {
        return cityRepository.findByName(name).getId();
    }

    @Override
    public City getCityById(Long id) {
        return cityRepository.findById(id).get();
    }
}

package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;

import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;


    @Override
    public UserDto save(final UserDto userDto) {
        User user = Optional.ofNullable(userDto.getId())
                .map(item -> update(userDto))
                .orElseGet(() -> create(userDto));
        return userMapper.toDto(user);
    }

    private User create(final UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        User saved = userRepository.save(user);
        return saved;
    }

    private User update(final UserDto userDto) {
        User user = userRepository.findById(userDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + userDto.getId() + " doesn't exist"));
        userMapper.update(userDto, user);
        User saved = userRepository.save(user);
        return saved;
    }

    @Override
    public UserDto findById(Long id) {
        return userRepository.findById(id).map(userMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + id + " doesn't exist"));
    }

    public UserDto getAuthenticatedUser(Principal principal){
        return userMapper.toDto(userRepository.findByEmail(principal.getName()));
    }
}

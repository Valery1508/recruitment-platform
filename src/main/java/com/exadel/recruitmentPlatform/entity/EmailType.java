package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum EmailType {

    SENDING_APPLICATION_TEMPLATE("Exadel.html"),
    ASSIGNMENT_INTERVIEW_TEMPLATE("AssignmentInterview.html");

    private String messageKey;

    EmailType(String message) {
        this.messageKey = message;
    }
}
ALTER TABLE skills ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE skills ADD COLUMN created timestamp(1) without time zone;
ALTER TABLE internship ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE internship ADD COLUMN created timestamp(1) without time zone;
ALTER TABLE internship_request ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE internship_request ADD COLUMN created timestamp(1) without time zone;
ALTER TABLE internship_skills ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE internship_skills ADD COLUMN created timestamp(1) without time zone;
ALTER TABLE user ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE user ADD COLUMN created timestamp(1) without time zone;
ALTER TABLE speciality ADD COLUMN updated timestamp(1) without time zone;
ALTER TABLE speciality ADD COLUMN created timestamp(1) without time zone;

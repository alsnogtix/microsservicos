FROM gradle:8.13.0-jdk21
COPY --chown=gradle:gradle . .
WORKDIR .
RUN gradle build -x test --no-daemon --stacktrace --info
EXPOSE 8081
CMD ["gradle", "bootRun"]
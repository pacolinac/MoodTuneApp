# Use a Maven image with OpenJDK 11
FROM maven:3.8.4-openjdk-11

# Set the working directory in the container
WORKDIR /app

# Copy all project files into the container
COPY . /app

# Run the Maven build command
RUN mvn clean install

# Expose the necessary port (for a Spring Boot application, typically 8080)
EXPOSE 8080

# Run the app with the generated jar file
CMD ["java", "-jar", "target/your-app.jar"]

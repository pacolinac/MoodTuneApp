FROM maven:3.8.1-openjdk-17 as build

WORKDIR /app

COPY . .

RUN ls -l /app

RUN mvn -f /app/IzvorniKod/backend_/pom.xml clean install -DskipTests

RUN ls -l /app/target

EXPOSE 8080

CMD ["java", "-jar", "target/survey-app-0.0.1-SNAPSHOT.jar"]

package hr.fer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication(scanBasePackages = "hr.fer")
@EnableJpaRepositories(basePackages = "hr.fer.repository")
@EntityScan(basePackages = {"hr.fer.model"})
public class SurveyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SurveyAppApplication.class, args);
	}
}

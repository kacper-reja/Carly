package react.pw.carly.exceptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;


@ControllerAdvice(annotations = RestController.class)
public class CompanyControllerExceptionHelper {
    private final Logger logger = LoggerFactory.getLogger(CompanyControllerExceptionHelper.class);

    @ExceptionHandler(value = { InvalidFileException.class })
    public ResponseEntity<ExceptionDetails> handleInvalidFileException(InvalidFileException ex) {
        logger.error("Invalid Input Exception: {}", ex.getMessage());
        return new ResponseEntity<>(new ExceptionDetails(HttpStatus.NOT_FOUND, ex.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = { ResourceNotFoundException.class })
    public ResponseEntity<ExceptionDetails> handleResourceNotFoundException(ResourceNotFoundException ex) {
        logger.error("Invalid Input Exception: {}", ex.getMessage());
        return new ResponseEntity<>(new ExceptionDetails(HttpStatus.NOT_FOUND, ex.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = { UnauthorizedException.class })
    public ResponseEntity<ExceptionDetails> handleUnauthorizedException(UnauthorizedException ex) {
        logger.error("Invalid Input Exception: {}", ex.getMessage());
        return new ResponseEntity<>(new ExceptionDetails(HttpStatus.UNAUTHORIZED, ex.getMessage()), HttpStatus.UNAUTHORIZED);
    }

}

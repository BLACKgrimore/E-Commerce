package com.mkrp.controller;

import com.mkrp.config.JwtProvider;
import com.mkrp.exception.UserException;
import com.mkrp.model.User;
import com.mkrp.repository.UserRepository;
import com.mkrp.request.LoginRequest;
import com.mkrp.response.AuthResponse;
import com.mkrp.service.CustomUserServiceImplementation;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomUserServiceImplementation customUserService;

    public AuthController(CustomUserServiceImplementation customUserService,
                          JwtProvider jwtProvider, PasswordEncoder passwordEncoder,
                          UserRepository userRepository) {
        this.customUserService = customUserService;
        this.jwtProvider = jwtProvider;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException{
        // Perform necessary validations and save user in the database
        // Return an AuthResponse object containing JWT token

        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        // Generate JWT token
        User isEmailExist = userRepository.findByEmail(email);

        if(isEmailExist != null)
            throw new UserException("User already exists with" + email);

        // Save user to database
        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);

        User savedUser = userRepository.save(createdUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail()
                ,savedUser.getPassword());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse(token,"Signup Success");

        return ResponseEntity.ok(authResponse);
    }

    public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest)
            throws UserException {
        // Perform necessary validations and authenticate user using provided credentials
        // Return an AuthResponse object containing JWT token

        String userName = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(userName, password);
        return null;
    }

    private Authentication authenticate(String userName, String password) {
        UserDetails userDetails = customUserService.loadUserByUsername(userName);

        if(userDetails == null){
            throw new BadCredentialsException("Invalid Username....");
        }

        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password....");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,
                userDetails.getAuthorities());
    }
}

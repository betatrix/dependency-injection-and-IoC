interface IAuthenticator {
    authenticate(username: string, password: string): boolean;
}

interface IUserRepository {
    saveAuthenticatedUser(username: string): void;
}

class Authenticator implements IAuthenticator {
    authenticate(username: string, password: string): boolean {
        // Lógica para a autenticação
        return true;
    }
}

class UserRepository implements IUserRepository {
    saveAuthenticatedUser(username: string): void {
        // Lógica para salvar o usuário autenticado
    }
}

class AuthController { 
    private authenticator: IAuthenticator;
    private userRepository: IUserRepository

    // Injeção de dependência via construtor (sem usar a classe concreta)
    constructor(authenticator: IAuthenticator, userRepository: IUserRepository) {
        this.authenticator = authenticator;
        this.userRepository = userRepository
    }

    login(username: string, password: string) {
        if (this.authenticator.authenticate(username, password)) {
            this.userRepository.saveAuthenticatedUser(username);
            return true;
        } else {
            console.log('User not found');
            return false;
        }
    }
}

// Para utilizar outros serviços de email, por exemplo, basta criar uma nova classe, implementar a interface e injetar no controlador
const authenticator = new Authenticator;
const userRepository = new UserRepository;
const authController = new AuthController(authenticator, userRepository);

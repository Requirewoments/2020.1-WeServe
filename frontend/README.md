# WeServe
# Configurando ambiente de dessenvolvimento
Esse será um tutorial de como instalar o ambiente para desenvovimento para o React App. Esse tutorial sera para o ambiente de desenvovimento do ubuntu 20.04, mas que serve para as outras distros baseadas em Debian

# Dependências:
Você precisará ter instalado o Node, a linha de comando do react-native, o JDK e o android studio

O android studio será necessário para criar a aplicação que rodará no celular.

## Node
Siga as instruções para a intalação do seu SO para instalar a instalação do node versão 10 ou mais nova.

## Java Development Kit
O React Native depende de no minimo a versão 8 do Java SE Development Kit (JDK). 

## Android development environment
Configuar o ambiente do android studio é bastante demorado, podendo levar mais de duas horas, mas são poucos passos para configurar, mas que ainda sim precisam de bastante atenção.

### 1. Instale Android Studio
Baixe o Android Studio. Quando aparecer uma tela de configuração da instalação  (wizard) certifique que os seguintes campos estejam marcados.

- Android SDK
- Android SDK Platform
- Android Virtual Device

Após clique em `Next` para prosseguir

Caso não tenha marcado as caixas ainda poderá instalar após essas dependências. Seguimos para o próximo passo:

### 2. Instale o Android SDK
O Android Studio instala por padrão a ultima versão do Android SDK. Desenvolver uma aplicação react-native requer o Android 10 (Q) SDK especificamente. Pacotes adicionais podem ser instalados através do gerenciador SDK no Android Studio.

Para fazer isso, abra o Android Studio, clique em `Configure` e selecione `SDK Manager`

O Gerenciador SDK  pode ser encontrado dentro de Android Studio Preferences, `Appearence & Behavior` -> `System Settings` -> `Android SDK`

Selecione SDK Plataforms aba dentro do gerenciador SDK, apos marque a opção `Show Package Details` no canto inferior direito. Em seguida marque os seguintes campos:

- Android SDK Platform 29
- Intel x86 Atom_64 System Image ou Google APIs Intel x86 Atom System Image

Após selecione a aba SDK tool  e marque a opção de `Show Package Details` também. Olhe e expanda a opção Andoid SDK build tools e marque a opção 29.0.2 e finalmente clique em Apply para finalizar.

### 3. Configurar a variável de ambiente ANDROID_HOME:
O Android Studio precisa de algumas variáveis de ambiente configuradas. Essa parte é especifica do linux Ubuntu 20.04, caso você tenha outro SO, pesquise esse processo. Nessa parte você tera que abrir o seu bashrc e adicionar as seguintes linhas e salvar.

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Digite:
```
source $HOME/.bash_profile
```
Para carregar as alterações e disponibilizar as variaveis de ambiente.

## React Native Command Line Interface
Para instalar o react-native apenas rode o seguinte comando:
```
npm install -g react-native-cli
```

# Rodando a aplicação:
Para rodar a aplicação primeiro rode o seguinte comando:
```
npx react-native start
```

Isso irar subir o metro bundler, que será a conexão entre a aplicação rodando e o que está sendo modificando no desenvolvimento. Em seguida rode o seguinte comando:

```
npx react-native run-android
```

Esse comando ira subir um emulador android dentro do android studio e pronto a aplicação estará rodando. 
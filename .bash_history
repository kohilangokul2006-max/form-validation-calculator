if [ -d 'Acode-live-server-backend' ]; then   cd Acode-live-server-backend && python3 main.py; else   apk update;   apk upgrade;   apk add git;   apk add python3;   apk add py3-pip;   git clone https://github.com/hackesofice/Acode-live-server-backend.git;   cd Acode-live-server-backend;   apk add --no-cache py3-flask py3-requests py3-flask-cors py3-jinja2;   python3 main.py; fi
get status
clear
apk add git
git status
cleat
clear

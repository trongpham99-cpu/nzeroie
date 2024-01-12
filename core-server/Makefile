build-dev:
	docker build -f dockers/Dockerfile.dev -t socket.dev .
	docker compose -f dockers/docker-compose.dev.yml up -d

build-qc:
	docker build -f dockers/Dockerfile.qc -t socket.qc .
	docker compose -f dockers/docker-compose.qc.yml up -d

build-uat:
	docker build -f dockers/Dockerfile.uat -t socket.uat .
	docker compose -f dockers/docker-compose.uat.yml up -d

build:
	docker build -f dockers/Dockerfile.production -t socket.production .
	docker compose -f dockers/docker-compose.production.yml up -d
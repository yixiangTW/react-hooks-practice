docker image build -t react-hooks-practice -f Dockerfile .
docker container run -p 8081:8080 --rm -it react-hooks-practice

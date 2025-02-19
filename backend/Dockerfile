FROM python:3.11-slim as base

# Allow statements and log messages to immediately appear in the Knative logs
ENV PYTHONUNBUFFERED True

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY requirements.txt ./

# Install production dependencies.
RUN pip install --no-cache-dir -r requirements.txt

COPY . ./

FROM base as local_prod

EXPOSE 5000

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
CMD exec gunicorn --bind 0.0.0.0:5000 --workers 1 --worker-class gevent --threads 1 --timeout 0 root:app
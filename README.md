# Sumo Log Router API

SumoLogic does not offer a public API for log shipping.

This project ouputs POST data sent to the defined HTTP endpoint into STDOUT.

Combined with the SumoLogic Docker Collector, this tool can be used to translate logs from a standard/private interface into their cloud.

## Building / Running

```docker-compose build```

```docker-compose run -d```

## Sending Data

Define your API key with the the S_KEY environment variable.

This is used to secure who can send data into your account.

Define the port with PORT env var. This defaults to 3000
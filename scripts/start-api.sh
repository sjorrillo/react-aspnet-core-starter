#!/bin/sh

set -e

API_DIRECTORY="../src/server/Api"
HMR=false

# move into api directory
cd $(cd "$(dirname "$0")"; pwd) && cd $API_DIRECTORY

function print_invalid_flag {
  echo "flag provided but not defined: $1"
  exit 2
}

# process options
while [[ $# > 0 ]]; do
  key="$1"
  case $key in
    --hot)
      HMR=true
    ;;
    *)
      print_invalid_flag "$1"
    ;;
  esac

  shift
done # end while

# Run aspnet core
if [[ "$HMR" == "true" ]] ; then
  dotnet watch run
else
  dotnet run
fi

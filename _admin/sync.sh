echo "Sending files..."
rsync -rv ../ root@vagoslabrou.xyz:/var/www/vagos/

echo "Getting guest signs."
rsync -rv root@vagoslabrou.xyz:/var/www/vagos/_guests/ ../_guests/

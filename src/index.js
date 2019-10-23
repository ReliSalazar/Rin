const { Client, Attachment, RichEmbed } = require('discord.js');
const client = new Client();    // cient == bot
const prefix = 'r!';
const channelBotTest = '624089778052268042';
const channelGeneral = '622613500329721886';
const yearProgress = require('year-progress');

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);

    // 1000     - 1 segundo
    // 60000    - 1 minuto
    // 300000   - 5 minutos
    // 18000000 - 5 horas
    // 36000000 - 10 horas
    // 72000000 - 20 horas
    setInterval(() => {
        let currentDate = new Date();
        if (currentDate.getHours() === 14) {    // 9 am
            if (currentDate.getMinutes() == 0) {
                if (currentDate.getSeconds() == 0) {
                    const attachment = new Attachment('./src/img/artemio.jpg');
                    client.channels.get(channelGeneral).send(`Buenos días, Artemio, que tu sabiduría Arcade nos ilumine y nos aleje de la mala emulación, amén. 😌🙏`, attachment);
                }
            }
        }

        if (currentDate.getHours() === 17) {    // 12 pm
            if (currentDate.getMinutes() == 0) {
                if (currentDate.getSeconds() == 0) {
                    const attachment = new Attachment('./src/img/chendo_frio.png');
                    client.channels.get(channelGeneral).send(attachment);
                }
            }
        }

        if (currentDate.getHours() === 19) {    // 5 pm
            if (currentDate.getMinutes() == 0) {
                if (currentDate.getSeconds() == 0) {
                    const attachment = new Attachment('./src/img/artemio.jpg');
                    client.channels.get(channelGeneral).send(`Tardes ya, Artemio`, attachment);
                }
            }
        }

        if (currentDate.getHours() === 3) {     // 10 pm
            if (currentDate.getMinutes() == 0) {
                if (currentDate.getSeconds() == 0) {
                    const attachment = new Attachment('./src/img/artemio.jpg');
                    client.channels.get(channelGeneral).send(`Buenas noches, Artemio. 😴💤`, attachment);
                }
            }
        }

        if (currentDate.getDay() == 4) { // thursday
            if (currentDate.getHours() == 15) { // 10 am
                if (currentDate.getMinutes() == 0) {
                    if (currentDate.getSeconds() == 0) {
                        const attachment = new Attachment('./src/video/tomboy_thursday.mp4');
                        client.channels.get(channelGeneral).send(`**It's fucking tomboy thursday!**`, attachment);
                    }
                }
            }
        }
    }, 1000)
});

client.on('message', async message => {
    /*if (message.content === 'test') {

    }*/

    if (message.content === prefix + 'chendo') {
        const attachment = new Attachment('./src/img/chendo_frio.png');
        message.channel.send(attachment);
    }

    if (message.content === prefix + 'artemio') {
        const attachment = new Attachment('./src/img/artemio.jpg');

        let currentDate = new Date();
        
        if (currentDate.getHours() <= 1) {  // 8pm
            message.channel.send(`Tardes ya, Artemio`, attachment);
        }

        else if (currentDate.getHours() >= 2 && currentDate.getHours() <= 11) {     // 9pm - 6am
            message.channel.send(`Buenas noches, Artemio. 😴💤`, attachment);
        }

        else if (currentDate.getHours() >= 12 && currentDate.getHours() <= 18) {    // 7am - 1pm
            message.channel.send(`Buenos días, Artemio, que tu sabiduría Arcade nos ilumine y nos aleje de la mala emulación, amén. 😌🙏`, attachment);
        }

        else if (currentDate.getHours() >= 19) {    // 2pm
            message.channel.send(`Tardes ya, Artemio`, attachment);
        }
    }

    if (message.content === prefix + "bruh") {
        const attachment = new Attachment('./src/img/bruh.jpeg');
        message.channel.send(attachment);
    }

    if (message.content === prefix + 'clear') {
        if (message.author.tag === 'Reli#8831') {
            const fetched = await message.channel.fetchMessages({limit: 100});
            message.channel.bulkDelete(fetched);
        }
        else {
            const embed = new RichEmbed()
            .setTitle('Solo un administrador puede utilizar este comando.')
            .setColor('#FF4C4C');

        message.channel.send(embed);
        }
    }

    if (message.content === prefix + 'chale') {
        const attachment = new Attachment('./src/img/chale.jpg');
        message.channel.send(attachment);
    }

    if (message.content === prefix + 'niñomenso') {
        const embed = new RichEmbed()
            .setTitle('This is a certified Niño Menso ™ Moment')
            .setColor('RANDOM');

        message.channel.send(embed);
    }

    if (message.content === prefix + 'yp') {
        const embed = new RichEmbed()
            .setTitle('**Progreso del año:**')
            .setDescription(yearProgress().yearBar + " " + yearProgress().percent + "%")
            .setColor('RANDOM');

        message.channel.send(embed);
    }

    if (message.content === prefix + 'time') {
        let currentDate = new Date();
        message.channel.send(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
    }

    // Comandos de ayuda
    if (message.content === prefix + 'help') {
        const embed = new RichEmbed()
            .setTitle('**Lista de comandos**')
            .setDescription(
                '**‣r!artemio**\n' +
                '**‣r!bruh**\n' +
                '**‣r!chale**\n' +
                '**‣r!chendo**\n' +
                '**‣r!niñomenso**\n' +
                '**‣r!yp**\n' +

                '\n*Para información más detallada escriba **r!help + comando***\n' +
                '***Ejemplo:** r!help artemio*'
                )
            .setColor('#4CE0B3');
        message.channel.send(embed);
    }
    if (message.content === prefix + 'help artemio') {
        const embed = new RichEmbed()
            .setTitle('**r!artemio**')
            .setDescription(
                'Envía una foto de Artemio Urbina con un mensaje extra dependiendo de la hora del día.'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
    if (message.content === prefix + 'help bruh') {
        const embed = new RichEmbed()
            .setTitle('**r!bruh**')
            .setDescription(
                'Se usa cuando ***bruh***'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
    if (message.content === prefix + 'help chale') {
        const embed = new RichEmbed()
            .setTitle('**r!chale**')
            .setDescription(
                'Se usa cuando chale te humillaron'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
    if (message.content === prefix + 'help chendo') {
        const embed = new RichEmbed()
            .setTitle('**r!chendo**')
            .setDescription(
                'Se usa cuando ta chendo frío o calor'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
    if (message.content === prefix + 'help niñomenso') {
        const embed = new RichEmbed()
            .setTitle('**r!niñomenso**')
            .setDescription(
                'Se usa cuando hay un momento niño menso'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
    if (message.content === prefix + 'help yp') {
        const embed = new RichEmbed()
            .setTitle('**r!yp**')
            .setDescription(
                'Muestra una barra de progreso del año en curso'
            )
            .setColor('#4CE0B3');

        message.channel.send(embed);
    }
});

client.login('NjI0MDkwMjc1NjA1OTA1NDI1.XYfztQ.vb6cgJtIl-aj_uCWJbsvFlMwrmI');

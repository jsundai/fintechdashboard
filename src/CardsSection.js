import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
    display: 'flex',
    justifyContent: 'center', 
    margin: '10vh 0',

};

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
  }

const styles = {
  cardStyles: {
    root: {
      background: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
      color: 'white',
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

  const cards = [
    {
      title: 'Current Balance',
      amount: '$23,545',
      icon: 'Money',
      percentage: '2.3',
    },
    {
      title: 'Current Expenses',
      amount: '$12,034',
      icon: 'PaymentCard',
      percentage: '0.3'
    },
    {
      title: 'Current Income',
      amount: '$15,245',
      icon: 'Savings',
      percentage: '1.3'
    }, 
    {
        title: 'Bitcoin (BTC) ',
        amount: '$9,785.95',
        icon: 'Savings',
        percentage: '1 BTC'
    }, 
    {
        title: 'Ether (ETH)',
        amount: '$1019.55',
        icon: 'Savings',
        percentage: '5 ETH'
    }  

  ]

  const CardsSection = () => {
    initializeIcons();
    return (
      <div style={container}>
        {cards.map((card) => (
          <div className="s-Grid-col ms-sm3 ms-xl3">
            <Card styles={styles.cardStyles}>
              <Card.Section>
                <Card.Item>
                  <i style={icon} className={<code data-enlighter-language="raw" class="EnlighterJSRAW">ms-Icon ms-Icon--${card.icon}</code>} aria-hidden="true"></i>
                  <Text styles={styles.header}>{card.title}</Text>
                </Card.Item>
                <Card.Item>
                  <Text styles={styles.amount}>{card.amount}</Text>
                </Card.Item>
                <Card.Item>
                  <Text styles={styles.percentage}>
                    {card.percentage} %
                  </Text>
                </Card.Item>
              </Card.Section>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  export default CardsSection;
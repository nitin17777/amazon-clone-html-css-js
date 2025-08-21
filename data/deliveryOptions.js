export
const deliveryOptions = [

    {
        id: '1',
        deliveryDays : 7,
        prcieCents:0
    },
    {
        id: '2',
        deliveryDays : 3,
        prcieCents:499
    },
    {
        id: '3',
        deliveryDays : 1,
        prcieCents:999
    },



    
];



export function getDeliveryOption()
{
    let deliveryOption;

      deliveryOptions.forEach((option) =>
      {

        if(option.id === deliveryOptionId )
        {
          deliveryOption = option;
        }
      });

      return deliveryOption || deliveryOptions[0];
}
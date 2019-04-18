import React from "react";
import { Modal, Button, Select } from "react-materialize";

const Orders = props => (
  <div className="container">
    <ul>
      <li>
        <div className="card horizontal hoverable ">
          <div className="card-image">
            <img className="img-responsive" src={props.image} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <ul>
                <li>Item: {props.item}</li>
                <li>Ordered: {props.OrderDate}</li>
                <li>Quantity: {props.Quantity}</li>
                <li>Price: ${props.OrderCost}.00</li>
                <li>ID: ${props.ProductID}</li>
              </ul> 
            </div>
          </div>
          <div className="card-action">
          <Modal
              header="Feedback"
              trigger={<Button>Leave Feedback</Button>}
              actions={
                <Button onClick={props.CreateFeedback} className="Feedback" modal="close">
                  Submit Feedback
                </Button>
                }
                >
                <form>
                Product Rating <br />
                <Select onChange={props.handleRatingChange}
                  name="Rating">
                  <option value="1" name="Rating">1</option>
                  <option value="2" name="Rating">2</option>
                  <option value="3" name="Rating">3</option>
                  <option value="4" name="Rating">4</option>
                  <option value="5" name="Rating">5</option>
                </Select>
                Comments: <br />
                <input
                  type="text"
                  name="Comments"
                  onChange={props.handleUpdateValueChange}
                />
              </form>
            </Modal>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default Orders;

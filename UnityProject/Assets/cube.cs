using System.Collections;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using UnityEngine;

public class cube : MonoBehaviour
{
    private int clickCount = 0;
    private int rotateX = 0;
    private int rotateY = 0;
    private int rotateZ = 0;

    private static Color[] colors = { Color.white, Color.blue, Color.grey, Color.red, Color.black };
    private int CurrentColorIndex = 0;

    // Use this for initialization
    void Awake()
    {
        Debug.Log("Awake");
        UnityMessageManager.Instance.OnRNMessage += onMessage;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnRNMessage -= onMessage;
    }

    void setXRotation(string val)
    {
        Debug.Log("setXRotation:" + val);
        rotateX = int.Parse(val);
    }

    void setYRotation(string val)
    {
        Debug.Log("setYRotation:" + val);
        rotateY = int.Parse(val);
    }

    void setZRotation(string val)
    {
        Debug.Log("setZRotation:" + val);
        rotateZ = int.Parse(val);
    }

    void OnMouseDown()
    {
        Debug.Log("click");
        CurrentColorIndex = (CurrentColorIndex+1) % 5;
        clickCount++;
        GetComponent<Renderer>().material.color = colors[CurrentColorIndex];

        UnityMessageManager.Instance.SendMessageToRN(new UnityMessage(){
            name = "click",
            data = JObject.FromObject(
                new {
                    colors = colors[CurrentColorIndex].ToString() ,
                    clickCount = clickCount 
            }),
            callBack = (data) =>{
                Debug.Log("onClickCallBack:" + data);
            }
        });
    }

    void onMessage(MessageHandler message)
    {
        Debug.Log("onMessage");
        var data = message.getData<string>();
        message.reply(new { CallbackTest = "I am Unity callback" });
    }


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(rotateX, rotateY, rotateZ);
    }
}
